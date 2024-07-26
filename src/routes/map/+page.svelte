<script lang="ts">
	import LeafletMap from '$components/leaflet/LeafletMap.svelte';
	import LeafletScaleControl from '$components/leaflet/controls/LeafletScaleControl.svelte';
	import LeafletTileLayer from '$components/leaflet/layers/LeafletTileLayer.svelte';

	import type { LatLngExpression } from 'leaflet';

	const centre: LatLngExpression = [-31.952195, 152.295025];
	const zoom = 13;

	const streetsUrl = `https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Base_Map/MapServer/tile/{z}/{y}/{x}`;
	const streetsAttribution = `\u003ca href='https://www.spatial.nsw.gov.au' target='_blank'\u003e\u0026copy; Spatial Services NSW \u003c/a\u003e`;
	const aerialUrl = `https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer/tile/{z}/{y}/{x}`;
	const aerialAttribution = `\u003ca href='https://www.spatial.nsw.gov.au' target='_blank'\u003e\u0026copy; Spatial Services NSW \u003c/a\u003e`;
</script>

<div style="height:50em; width: 50em;">
	<LeafletMap {centre} {zoom} layersControl={true}>
		<LeafletTileLayer url={streetsUrl} attribution={streetsAttribution} />
		<LeafletTileLayer url={aerialUrl} attribution={aerialAttribution} />
		<LeafletScaleControl position="bottomleft" />
	</LeafletMap>
</div>
