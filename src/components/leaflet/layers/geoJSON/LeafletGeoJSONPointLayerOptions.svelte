<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type L from 'leaflet';

	export let icon: L.Icon | L.DivIcon | undefined = undefined;
	export let radius: number = 5;
	export let color: string = '#3388ff';

	const optionsStore: Writable<L.GeoJSONOptions> = getContext('layerOptions');

	$: $optionsStore = {
		pointToLayer: (feature, latlng) => {
			const leaflet = getContext<{ getLeaflet: () => typeof L }>('leaflet');
			if (icon) {
				return leaflet.getLeaflet().marker(latlng, { icon });
			} else {
				return leaflet.getLeaflet().circleMarker(latlng, { radius, color });
			}
		}
	};
</script>
