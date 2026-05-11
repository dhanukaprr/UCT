import { Link, Route, Routes, useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import { allTours, tourCategoriesData } from '../data/toursData';

function ToursList() {
  return (
    <div className="w-full">
      <div className="p-12 lg:p-24 border-b border-slate-200 text-center flex flex-col items-center bg-white">
        <div className="inline-block px-3 py-1 bg-slate-200 text-[10px] font-bold text-slate-800 uppercase tracking-widest w-fit mb-6">Discover Sri Lanka</div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 mb-6 font-bold">Our Tour Categories</h1>
        <p className="text-slate-500 font-medium text-lg max-w-2xl">Browse our curated collection of experiences across the island.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tourCategoriesData.map(category => (
          <div key={category.id} className="bg-slate-50 border-r border-b border-slate-200 p-12 transition-colors hover:bg-white overflow-hidden group">
            <h3 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-4">{category.name}</h3>
            <p className="text-slate-500 font-medium text-sm mb-8 line-clamp-3 leading-relaxed">{category.description}</p>
            <Link to={`/tours/${category.id}`} className="inline-flex items-center text-slate-900 font-bold uppercase tracking-widest text-xs group-hover:text-orange-600 transition-colors">
              Explore Tours <ArrowRight size={16} className="ml-2" />
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

  if (!categoryInfo) return <div className="py-32 text-center text-xl">Category not found</div>;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
       <div className="p-12 lg:p-24 border-b border-slate-200 bg-white">
          <Link to="/tours" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 mb-8 inline-block transition-colors">&larr; Back to all categories</Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 mb-6">{categoryInfo.name}</h1>
          <p className="text-slate-500 font-medium text-lg max-w-3xl leading-relaxed">{categoryInfo.description}</p>
       </div>

       {categoryTours.length > 0 ? (
         <div className="p-0">
            {categoryTours.map(tour => (
               <div key={tour.id} className="border-b border-slate-200 flex flex-col lg:flex-row bg-white">
                 <div className="w-full lg:w-2/5 bg-slate-100 p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                    <h3 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-6">{tour.title}</h3>
                    <div className="flex items-center text-slate-600 mb-8 space-x-2 bg-white px-4 py-2 border border-slate-200 w-fit">
                       <Clock size={16} className="text-orange-600" />
                       <span className="font-bold uppercase tracking-widest text-xs">{tour.duration}</span>
                    </div>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">{tour.description}</p>
                    <Link to={`/contact?tour=${encodeURIComponent(tour.title)}`} className="self-start px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors">
                      Inquire About This Tour
                    </Link>
                 </div>
                 <div className="w-full lg:w-3/5 p-12 lg:p-16">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 pb-4 border-b border-slate-200">Tour Itinerary</h4>
                    <div className="space-y-0">
                      {tour.itinerary.map((day, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row border-b border-slate-100 py-6 last:border-0 last:pb-0 first:pt-0">
                          <div className="w-32 shrink-0 mb-2 md:mb-0">
                             <span className="inline-block px-2 py-1 bg-orange-600/10 text-orange-600 font-bold text-[10px] uppercase tracking-widest">{day.day}</span>
                          </div>
                          <div>
                             <h5 className="font-black uppercase tracking-tighter text-slate-900 mb-2 leading-tight">{day.location}</h5>
                             <p className="text-sm font-medium text-slate-500 leading-relaxed">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            ))}
         </div>
       ) : (
         <div className="p-24 text-center bg-white border-b border-slate-200">
            <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900 mb-4">More tours coming soon</h3>
            <p className="text-slate-500 font-medium">We are continually updating our packages. Contact us for custom itineraries in this category.</p>
         </div>
       )}
    </div>
  );
}

export default function Tours() {
  return (
    <div className="w-full bg-slate-50 pt-16">
      <Routes>
        <Route index element={<ToursList />} />
        <Route path=":categoryId" element={<CategoryTours />} />
      </Routes>
    </div>
  )
}
