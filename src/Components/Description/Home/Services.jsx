import { useEffect, useState } from "react";

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold text-center">Our <span className="text-amber-400">Services</span></h2>
            <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-5">
               {
                services.map(service => <div key={service.id} className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[330px]" src={service.image}/></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{service.title}</h2>
                  <p className="font-semibold">{service.description}</p>
                </div>
                
              </div>)
               }
            </div>
        </div>
    );
};

export default Services;