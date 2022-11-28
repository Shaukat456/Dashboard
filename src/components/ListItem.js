export default function ListItem({image, title, starRating, rating , runtime , cast } ) {
    return (
      <article className="flex items-start space-x-6 p-6">
        <figure className="">

        <img src={'https://minimals.cc/assets/icons/apps/ic_chrome.svg'} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
        </figure>
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500 flex">
                <span className="sr-only">Star rating</span>
                <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
              </dt>

              <dd>{starRating}</dd>
              <dd>{'34'}</dd>
            </div>
            <div className="flex">
              {/* <dt className="sr-only">Rating</dt> */}
              <dd className=" text-gray-600 outline-none">{}</dd>
              {/* <h1 className='  font-semibold  text-red-800 bg-red-200    rounded-xl px-5     text-xs'>

Out of Date
</h1> */}
            </div>
         
          
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-slate-400">{}</dd>
            </div>
          </dl>
        </div>
      </article>
    )
  }
  