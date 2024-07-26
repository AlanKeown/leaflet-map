<script lang="ts">
	export let data;
	$: ({ kyngAddresspoints } = data);
	// $: addressPointTypes = [
	// 	...new Set(
	// 		kyngAddresspoints.registeredAddresspoints.features.map(
	// 			(feature: { properties: { addresspointtype: string } }) =>
	// 				feature.properties.addresspointtype
	// 		)
	// 	)
	// ];
</script>

<h1>Welcome to Supabase!</h1>
<ul>
	{#each kyngAddresspoints.registeredAddresspoints.features as feature}
		<li>{feature.properties.addresspointtype}</li>
	{/each}
</ul>
<pre>{JSON.stringify(kyngAddresspoints.registeredAddresspoints)}</pre>
