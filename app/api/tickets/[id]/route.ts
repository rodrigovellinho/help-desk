import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(
  _: unknown,
  { params }: { params: { id: string } },
) {
  const id = params.id

  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.from('/tickets').delete().eq('id', id)

  return NextResponse.json({ error })
}
