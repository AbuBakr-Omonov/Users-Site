import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 h-screen bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-700">
            <div className="w-full px-4 max-[640px]:max-w-[480px] max-[768px]:max-w-[640px] max-[1024px]:max-w-[768px] max-[1280px]:max-w-[1024px] mx-auto">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <>
                        <SwiperSlide>
                            <img src="https://picsum.photos/id/1015/1200/600" alt="Nature 1" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/id/1020/1200/600" alt="Nature 2" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/id/1021/1200/600" alt="Nature 3" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/id/1043/1200/600" alt="Nature 4" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/id/1045/1200/600" alt="Nature 5" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=600&q=80" alt="Mountain Landscape" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=600&q=80" alt="Forest Path" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&h=600&q=80" alt="Sunset Over Lake" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=1200&h=600&q=80" alt="Beach and Ocean" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=600&q=80" alt="Mountain with Clouds" className="w-full h-[90vh] object-cover rounded-xl" />
                        </SwiperSlide>
                    </>

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;

