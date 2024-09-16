import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  console.log(newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className='modal-backdrop' />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
