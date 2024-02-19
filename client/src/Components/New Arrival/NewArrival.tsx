import React from 'react'
import ps5 from '../../assets/ps5-slim-goedkope-playstation_large 1.png'
import lady from '../../assets/attractive-woman-wearing-hat-posing-black-background 1.png'
const NewArrival = () => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex gap-4 pr-5 max-w-full w-[216px]">
                <div className="flex flex-col justify-center aspect-[0.5]">
                    <div className="shrink-0 h-10 bg-red-500 rounded" />
                </div>
                <div className="flex-auto my-auto text-base font-semibold text-red-500">
                    Featured
                </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black whitespace-nowrap">
                New Arrival
            </div>
            <div className="self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-7 pt-12 w-full bg-black rounded text-neutral-50 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                            <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-20 pb-8 mt-10 min-h-[511px] max-md:pr-5 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={ps5}
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <div className="relative mt-80 text-2xl font-semibold tracking-wider leading-6 max-md:mt-10">
                                    PlayStation 5
                                </div>
                                <div className="relative mt-4 text-sm leading-5 w-[242px]">
                                    Black and White version of the PS5 coming out on sale.
                                </div>
                                <div className="relative mt-4 text-base font-medium leading-6 text-white">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                            {/* image is not fit to container, needs fix */}
                            <div className="flex flex-col justify-center items-end pl-16 rounded bg-stone-950 text-neutral-50 max-md:pl-5 max-md:max-w-full">
                                <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-20 pb-6 max-w-full min-h-[284px] w-[432px] max-md:pr-5">
                                    <img
                                        loading="lazy"
                                        src={lady}
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="relative mt-24 text-2xl font-semibold tracking-wider leading-6 whitespace-nowrap max-md:mt-10">
                                        Women’s Collections
                                    </div>
                                    <div className="relative mt-4 text-sm leading-5 w-[255px]">
                                        Featured woman collections that give you another vibe.
                                    </div>
                                    <div className="relative mt-4 text-base font-medium leading-6 text-white">
                                        Shop Now
                                    </div>
                                </div>
                            </div>
                            {/* end of comment */}
                            <div className="justify-center mt-8 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="grow w-full aspect-[0.95] max-md:mt-8"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="grow w-full aspect-[0.95] max-md:mt-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrival