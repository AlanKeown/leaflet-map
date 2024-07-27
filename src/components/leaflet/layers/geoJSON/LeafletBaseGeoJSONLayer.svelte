<script lang="ts">
	import { getContext, onMount, onDestroy, createEventDispatcher, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type L from 'leaflet';

	export let data: GeoJSON.GeoJsonObject;
	export let name: string = 'GeoJSON Layer';

	const { getLeafletMap } = getContext<{ getLeafletMap: () => L.Map }>('leafletMap');
	let leafletMap: L.Map;
	const { getLeaflet } = getContext<{ getLeaflet: () => typeof L }>('leaflet');
	let leaflet: typeof L;
	const layersStore: Writable<Record<string, L.Layer>> = getContext('layersStore');

	let layer: L.GeoJSON;
	const dispatch = createEventDispatcher();

	const optionsStore: Writable<L.GeoJSONOptions> = writable({});
	setContext('layerOptions', optionsStore);

	onMount(() => {
		leaflet = getLeaflet();
		leafletMap = getLeafletMap();
		const unsubscribe = optionsStore.subscribe((options) => {
			if (layer) {
				layer.setStyle(options);
			} else {
				layer = leaflet
					.geoJSON(data, {
						...options,
						onEachFeature: (feature, layer) => {
							if (options.onEachFeature) {
								options.onEachFeature(feature, layer);
							}
							layer.on({
								click: (e) => dispatch('featureClick', { feature, layer: e.target }),
								mouseover: (e) => dispatch('featureMouseover', { feature, layer: e.target }),
								mouseout: (e) => dispatch('featureMouseout', { feature, layer: e.target })
							});
						}
					})
					.addTo(leafletMap);

				layersStore.update((layers) => ({ ...layers, [name]: layer }));
				dispatch('layerCreated', layer);
			}
		});

		return () => {
			unsubscribe();
			if (layer && leafletMap) {
				leafletMap.removeLayer(layer);
				layersStore.update((layers) => {
					const { [name]: _, ...rest } = layers;
					return rest;
				});
			}
		};
	});

	export function getLayer(): L.GeoJSON | undefined {
		return layer;
	}
</script>

<slot />
