<script lang="ts">
	import LeafletBaseGeoJSONLayer from '$components/leaflet/layers/geoJSON/LeafletBaseGeoJSONLayer.svelte';

	export let data: GeoJSON.FeatureCollection<GeoJSON.Point>;
	export let name: string = 'Point Layer';
</script>

<LeafletBaseGeoJSONLayer {data} {name} on:featureClick on:featureMouseover on:featureMouseout>
	<slot />
</LeafletBaseGeoJSONLayer>
