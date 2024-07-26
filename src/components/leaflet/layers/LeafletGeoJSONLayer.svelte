<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import type L from 'leaflet';
	import { writable, type Writable } from 'svelte/store';

	export let data: GeoJSON.GeoJsonObject;
	export let options: L.GeoJSONOptions = {};
	export let name: string;

	const { getLeafletMap } = getContext<{ getLeafletMap: () => L.Map }>('leafletMap');
	const map: L.Map = getLeafletMap();

	const layersStore: Writable<Record<string, L.Layer>> = getContext('layersStore');

	let layer: L.GeoJSON;

	onMount(() => {
		const leaflet: typeof L = getContext<{ getLeaflet: () => typeof L }>('leaflet').getLeaflet();
		layer = leaflet.geoJSON(data, {
			style: options.style,
			onEachFeature: options.onEachFeature,
			filter: options.filter,
			...options
		});
		layer.addTo(map);

		layersStore.update((layers) => ({
			...layers,
			[name]: layer
		}));
	});

	onDestroy(() => {
		if (layer && map) {
			map.removeLayer(layer);
			layersStore.update((layers) => {
				const { [name]: _, ...rest } = layers;
				return rest;
			});
		}
	});
</script>
