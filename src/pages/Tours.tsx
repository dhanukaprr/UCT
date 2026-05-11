import { Link, Route, Routes, useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import { allTours, tourCategoriesData } from '../data/toursData';

function ToursList() {
  return (
    <div className="w-full max-w-[95%] mx-auto mt-24">
      <div className="text-center flex flex-col items-center mb-16 pt-12">
        <span className="text-zinc-400 font-light text-xs tracking-wider uppercase mb-6">(Categories)</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-zinc-900 mb-6 tracking-tight">Our Tour Categories</h1>
        <p className="text-zinc-500 font-light text-lg max-w-2xl">Browse our curated collection of experiences across the island.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32 max-w-6xl mx-auto">
        {tourCategoriesData.map(category => (
          <div key={category.id} className="bg-white rounded-[2rem] p-10 shadow-sm transition-all hover:shadow-xl group border border-zinc-100 flex flex-col justify-between">
            <div>
               <h3 className="text-3xl font-serif text-zinc-900 mb-4">{category.name}</h3>
               <p className="text-zinc-500 font-light text-sm mb-8 leading-relaxed">{category.description}</p>
            </div>
            <Link to={`/tours/${category.id}`} className="inline-flex items-center justify-between w-full text-zinc-900 text-sm font-medium border-t border-zinc-100 pt-6 group-hover:text-zinc-500 transition-colors">
              <span>Explore Tours</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryTours() {
  const { categoryId } = useParams();
  const categoryInfo = tourCategoriesData.find(c => c.id === categoryId);
  const categoryTours = allTours.filter(t => t.category === categoryId);

  if (!categoryInfo) return <div className="py-32 text-center text-xl font-light">Category not found</div>;

  return (
    <div className="w-full max-w-[95%] mx-auto min-h-screen mt-24">
       <div className="text-center mb-16 max-w-4xl mx-auto pt-12">
          <Link to="/tours" className="text-xs tracking-widest uppercase font-light text-zinc-400 hover:text-zinc-900 mb-6 inline-block transition-colors">&larr; Back to all categories</Link>
          <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6">{categoryInfo.name}</h1>
          <p className="text-zinc-500 font-light text-lg max-w-3xl mx-auto leading-relaxed">{categoryInfo.description}</p>
       </div>

       {categoryTours.length > 0 ? (
         <div className="space-y-12 pb-32 max-w-6xl mx-auto">
            {categoryTours.map(tour => (
               <div key={tour.id} className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-zinc-100 transition-shadow hover:shadow-md">
                 <div className="w-full lg:w-5/12 p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100 bg-[#FAF9F6]">
                    <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6 leading-tight">{tour.title}</h3>
                    <div className="flex items-center text-zinc-600 mb-8 space-x-2">
                       <Clock size={16} className="text-zinc-400" />
                       <span className="font-light text-sm">{tour.duration}</span>
                    </div>
                    <p className="text-zinc-600 font-light text-sm leading-relaxed mb-8">{tour.description}</p>
                    <Link to={`/contact?tour=${encodeURIComponent(tour.title)}`} className="self-start px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                      Inquire About This Tour
                    </Link>
                 </div>
                 <div className="w-full lg:w-7/12 p-10 lg:p-14 space-y-8 bg-white">
                    <h4 className="text-sm font-medium text-zinc-400 font-sans tracking-wide uppercase border-b border-zinc-100 pb-4">Tour Itinerary</h4>
                    <div className="space-y-6">
                      {tour.itinerary.map((day, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4 border-b border-zinc-50 pb-6 last:border-0 last:pb-0">
                          <div className="w-24 shrink-0">
                             <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-widest rounded-full">{day.day}</span>
                          </div>
                          <div>
                             <h5 className="font-serif text-zinc-900 mb-2 leading-tight text-xl">{day.location}</h5>
                             <p className="text-sm font-light text-zinc-500 leading-relaxed">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            ))}
         </div>
       ) : (
         <div className="p-24 text-center bg-white rounded-[2rem] border border-zinc-100 mb-32 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-zinc-900 mb-4">More tours coming soon</h3>
            <p className="text-zinc-500 font-light">We are continually updating our packages. Contact us for custom itineraries in this category.</p>
         </div>
       )}
    </div>
  );
}

export default function Tours() {
  return (
    <div className="w-full pt-16">
      <Routes>
        <Route index element={<ToursList />} />
        <Route path=":categoryId" element={<CategoryTours />} />
      </Routes>
    </div>
  )
}
