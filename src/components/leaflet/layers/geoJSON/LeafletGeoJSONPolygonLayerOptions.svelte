<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type L from 'leaflet';

	export let fillColor: string = '#3388ff';
	export let fillOpacity: number = 0.2;
	export let color: string = '#3388ff';
	export let weight: number = 1;

	const optionsStore: Writable<L.GeoJSONOptions> = getContext('layerOptions');

	$: $optionsStore = {
		style: {
			fillColor,
			fillOpacity,
			color,
			weight
		}
	};
</script>
