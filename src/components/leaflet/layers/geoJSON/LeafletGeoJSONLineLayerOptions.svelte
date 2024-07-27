<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type L from 'leaflet';

	export let color: string = '#3388ff';
	export let weight: number = 3;
	export let dashArray: string | undefined = undefined;

	const optionsStore: Writable<L.GeoJSONOptions> = getContext('layerOptions');

	$: $optionsStore = {
		style: {
			color,
			weight,
			dashArray
		}
	};
</script>
