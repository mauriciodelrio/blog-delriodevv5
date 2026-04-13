import { NextResponse } from 'next/server';
import { getPostData } from '@/utils/postUtils';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    // Obtener los datos del post
    const postData = await getPostData(slug, locale);

    if (!postData) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Retornar solo el frontmatter para evitar enviar contenido innecesario
    return NextResponse.json({
      frontmatter: postData.frontmatter,
      slug: slug,
    });
  } catch (error) {
    console.error('Error fetching post data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
