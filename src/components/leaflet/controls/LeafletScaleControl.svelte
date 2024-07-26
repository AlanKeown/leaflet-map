<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';

	import type L from 'leaflet';

	export let position: L.ControlPosition = 'bottomleft';
	export let maxWidth: number = 100;
	export let metric: boolean = true;
	export let imperial: boolean = false;
	export let updateWhenIdle: boolean = false;

	const { getLeafletMap } = getContext<{ getLeafletMap: () => L.Map }>('leafletMap');
	const { getLeaflet } = getContext<{ getLeaflet: () => typeof L }>('leaflet');
	let leafletMap: L.Map;
	let leaflet: typeof L;
	let scaleControl: L.Control.Scale;

	onMount(async () => {
		leaflet = getLeaflet();
		leafletMap = getLeafletMap();
		if (!scaleControl) {
			scaleControl = leaflet.control
				.scale({
					position,
					maxWidth,
					metric,
					imperial,
					updateWhenIdle
				})
				.addTo(leafletMap);
		}
		scaleControl.setPosition(position);
	});

	onDestroy(() => {
		scaleControl.remove();
	});
</script>
