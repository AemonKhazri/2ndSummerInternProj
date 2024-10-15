// import Image from "next/image";
// import Link from "next/link";
// import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

// import apiService from "@/app/services/apiService";
// import { getUserId } from "@/app/lib/action";


// const  PropertyDetailPage = async  ({params}:{params:{id:string}}) => {
//     const property  = await apiService.get(`/api/properties/${params.id}`)
//     const userId = await getUserId();
//     console.log('userId',userId)
//   return (

//     <main className="max-w-[1000px] mx-auto mt-52 px-6 pb-6 ">
 
//     <div className="w-full overflow-hidden mb-4 rounded-xl relative h-[64vh]">7
//         <Image 
//          fill
//          src={property.landlord.avatar_url}
//          className="object-cover h-full w-full"
//          alt="beach house"
//         />
//     </div>
//     <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 ">
//         <div className="py-6 pr-6 col-span-3">
//             <h1 className="mb-4 text-4xl">
//                 {property.title}
//             </h1>
//             <span className="mb-6 block text-lg text-gray-600">
//             {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathroom
//             </span>

//             <hr />
//             <Link 
//             href = {`/landlords/${property.landlord.id}`}
//             className="flex py-6 items-center space-x-4">
//             {property.landlord.avatar_url && 
            
//             (
//                 <Image 
                
//                 src={property.landlord.avatar_url}
//                 className="rounded-full"
//                 alt="user name"
//                 width={50}
//                 height={50}
//                 />
//             )
//             }

//                 <p><strong>{property.landlord.name}</strong> is your host</p>

//             </Link>
//                 <hr />
//                 <p className="mt-6 text-lg">
//                 {property.description}
//                 </p>
//         </div>
//         <ReservationSideBar
//         userId = {userId} 
//         property = {property}
//         />

//     </div>

//     </main>
//   )
// }

// export default PropertyDetailPage;

import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSideBar";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/action";

const PropertyDetailPage = async ({params}: { params: {id: string }}) => {
    const property = await apiService.get(`/api/properties/${params.id}`);
    const userId = await getUserId();

    console.log('userId', userId);

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={property.image_url}
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathrooms
                    </span>

                    <hr />

                    <Link 
                        href={`/landlords/${property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                        {property.landlord.avatar_url && (
                            <Image
                                src={property.landlord.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        )}

                        <p><strong>{property.landlord.name}</strong> is your host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                        {property.description}
                    </p>
                </div>

                <ReservationSidebar 
                    property={property}
                    userId={userId}
                />
            </div>
        </main>
    )
}

export default PropertyDetailPage;