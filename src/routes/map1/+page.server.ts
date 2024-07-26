import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const { data: kyngAddresspoints } = await supabase.rpc(
		'get_addresspoints_geojson'
	);
    console.log(kyngAddresspoints);
  return { kyngAddresspoints: kyngAddresspoints ?? [] }
}