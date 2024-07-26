<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';

	import type L from 'leaflet';

	export let url: string;
	export let attribution: string;
	export let layerOptions: L.TileLayerOptions = {};

	const leaflet = (getContext('leaflet') as { getLeaflet: () => typeof L }).getLeaflet();
	const leafletMap = (getContext('leafletMap') as { getLeafletMap: () => L.Map }).getLeafletMap();

	let tileLayer: L.TileLayer;

	onMount(() => {
		tileLayer = leaflet.tileLayer(url, { ...layerOptions, attribution }).addTo(leafletMap);
	});

	onDestroy(() => {
		if (leafletMap && tileLayer) {
			leafletMap.removeLayer(tileLayer);
		}
	});
</script>
