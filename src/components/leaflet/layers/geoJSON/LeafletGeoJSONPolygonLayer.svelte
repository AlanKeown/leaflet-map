<script lang="ts">
	import LeafletBaseGeoJSONLayer from '$components/leaflet/layers/geoJSON/LeafletBaseGeoJSONLayer.svelte';

	export let data: GeoJSON.FeatureCollection<GeoJSON.Polygon>;
	export let name: string = 'Polygon Layer';
</script>

<LeafletBaseGeoJSONLayer {data} {name} on:featureClick on:featureMouseover on:featureMouseout>
	<slot />
</LeafletBaseGeoJSONLayer>
