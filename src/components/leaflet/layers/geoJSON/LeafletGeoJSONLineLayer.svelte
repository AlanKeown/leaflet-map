<script lang="ts">
	import LeafletBaseGeoJsonLayer from '$components/leaflet/layers/geoJSON/LeafletBaseGeoJSONLayer.svelte';

	export let data: GeoJSON.FeatureCollection<GeoJSON.LineString>;
	export let name: string = 'LineString Layer';
</script>

<LeafletBaseGeoJsonLayer {data} {name} on:featureClick on:featureMouseover on:featureMouseout>
	<slot />
</LeafletBaseGeoJsonLayer>
