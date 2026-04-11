import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const getSupabase = async () => {
    const cookieStore = await cookies()
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY!,
        {
            cookies: {
                getAll: () => cookieStore.getAll()
            },
        }
    );
}