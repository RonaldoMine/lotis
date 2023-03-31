import {useState} from "react";
import Divider from "../components/Divider";
import {AiOutlineFile} from "react-icons/ai";
import {SlSizeFullscreen} from "react-icons/sl";
import {HiOutlineBuildingOffice2} from "react-icons/hi2";
import {MdOutlineLocationSearching, MdOutlinePlace} from "react-icons/md";
import Button from "../components/Button";
import axios from "axios";
import {BASE_URL} from "../utils/axios/axios";
import PageHeader from "../components/PageHeader";

type landProps = {
    referenceNumber: string;
    surface: string;
    town: string;
    district: string;
    localisation: string;
    mapCoordinates: string;
    plans: any;
    pictures: any;
    documents: any;
};

const AddLand = () => {
    const [landDatas, setLandDatas] = useState<landProps>({
        referenceNumber: "",
        surface: "",
        town: "",
        district: "",
        localisation: "",
        mapCoordinates: "40.71,-70.96",
        plans: null,
        pictures: null,
        documents: null,
    });
    return (
        <>
            <PageHeader title={"Ajouter un terrain"} link={"/admin/lands/add"}/>
            <div className="container-fluid">
                <div>
                    <section id="land-info" className="mt-4">
                        <input
                            type="text"
                            name="referenceNumber"
                            placeholder="Titre foncier"
                            value={landDatas.referenceNumber}
                            onChange={(e) =>
                                setLandDatas({...landDatas, referenceNumber: e.target.value})
                            }
                            className="border-none font-sequelBold text-4xl font-bold outline-none ml-6 leading-[3rem]"
                        />
                        <div id="land-info-details" className="mt-4 ml-6 space-y-4">
                            <div className="flex flex-row items-center">
                                <SlSizeFullscreen className="text-2xl text-neutral-400"/>
                                <input
                                    type="text"
                                    name="surface"
                                    placeholder="Entrer la superficie en m²"
                                    value={landDatas.surface}
                                    onChange={(e) =>
                                        setLandDatas({...landDatas, surface: e.target.value})
                                    }
                                    className="border-none outline-none ml-4"
                                />
                            </div>
                            <div className="flex flex-row items-center">
                                <HiOutlineBuildingOffice2 className="text-2xl text-neutral-400"/>
                                <input
                                    type="text"
                                    placeholder="Entrer le nom de la ville"
                                    name="town"
                                    value={landDatas.town}
                                    onChange={(e) =>
                                        setLandDatas({...landDatas, town: e.target.value})
                                    }
                                    className="border-none outline-none ml-4"
                                />
                            </div>
                            <div className="flex">
                                <div className="flex flex-row items-center">
                                    <MdOutlinePlace className="text-2xl text-neutral-400"/>
                                    <input
                                        type="text"
                                        name="district"
                                        placeholder="Entrer le nom du quartier"
                                        value={landDatas.district}
                                        onChange={(e) =>
                                            setLandDatas({
                                                ...landDatas,
                                                district: e.target.value,
                                            })
                                        }
                                        className="border-none outline-none ml-4"
                                    />
                                </div>
                                <div className="flex flex-row items-center ml-3">
                                    <MdOutlineLocationSearching className="text-2xl text-neutral-400"/>
                                    <input
                                        type="text"
                                        name="localisation"
                                        placeholder="Entrer le nom de la zone"
                                        value={landDatas.localisation}
                                        onChange={(e) =>
                                            setLandDatas({
                                                ...landDatas,
                                                localisation: e.target.value,
                                            })
                                        }
                                        className="border-none outline-none ml-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="map-section" className="mt-12">
                        <div className="ml-6">
                            <h3 className="font-sequelBold text-4xl font-bold mb-2">Map</h3>
                            <p className="font-sequelLight">
                                Add a marker on the following map to give a precise itinerary.
                            </p>
                        </div>
                        <div id="land-info-details">
                            <div className="bg-neutral-100 w-full h-60 mt-4"></div>
                        </div>
                    </section>

                    <section id="plan-section" className="mt-12">
                        <div className="ml-6">
                            <h3 className="font-sequelBold text-4xl font-bold mb-2">Plan</h3>
                            <p className="font-sequelLight">
                                Add at least two picture of the plan of the land. Maximum capacity
                                expected 2MB per file.
                            </p>
                        </div>
                        <div id="plan-pictures">
                            <div className="grid grid-cols-2 mt-4 gap-4">
                                <div
                                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            {/* <label
                    htmlFor="plan-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span> */}
                                            <input
                                                id="plan-upload"
                                                name="plans"
                                                type="file"


                                                onChange={(e) =>
                                                    setLandDatas({
                                                        ...landDatas,
                                                        plans: e.target.files,
                                                    })
                                                }
                                                // className="sr-only"
                                            />
                                            {/* </label> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span>
                    <input
                      id="plan1-upload"
                      name="plan1-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div> */}
                            </div>
                        </div>
                    </section>

                    <section id="photos-section" className="mt-12">
                        <div className="ml-6">
                            <h3 className="font-sequelBold text-4xl font-bold mb-2">Photos</h3>
                            <p className="font-sequelLight">
                                Add at least two picture of the actual land. Maximum capacity
                                expected 2MB per file.
                            </p>
                        </div>
                        <div id="land-pictures">
                            <div className="grid grid-cols-2 mt-4 gap-4">
                                <div
                                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            {/* <label
                    htmlFor="photos-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span> */}
                                            <input
                                                id="photos-upload"
                                                name="pictures"
                                                type="file"


                                                onChange={(e) =>
                                                    setLandDatas({
                                                        ...landDatas,
                                                        pictures: e.target.files,
                                                    })
                                                }
                                                // className="sr-only"
                                            />
                                            {/* </label> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span>
                    <input
                      id="photos1-upload"
                      name="photos1-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div> */}
                            </div>
                        </div>
                    </section>

                    <section id="documents-section" className="mt-12">
                        <div className="ml-6">
                            <h3 className="font-sequelBold text-4xl font-bold mb-2">Documents</h3>
                            <p className="font-sequelLight">
                                Add documents that justify your property. Maximum capacity expected
                                2MB per file.
                            </p>
                        </div>
                        <Divider/>
                        <div className="flex flex-row items-center">
                            <AiOutlineFile className="text-2xl text-neutral-400"/>
                            <input
                                type="file"
                                name="documents"
                                id="documents"

                                placeholder="+ Add a file"
                                // className="sr-only"
                                className="ml-3"

                                onChange={(e) =>
                                    setLandDatas({
                                        ...landDatas,
                                        documents: e.target.files,
                                    })
                                }
                            />
                            {/* <label
            htmlFor="documents"
            className="relative cursor-pointer rounded-md
            bg-white text-neutral-600 focus-within:outline-none
            focus-within:ring-2 focus-within:ring-neutral-600
            focus-within:ring-offset-2 hover:text-neutral-500 ml-3 font-sequelLight"
          >
            + Add a file
          </label> */}
                        </div>
                        <Divider/>
                    </section>
                    <Button onClick={() => {
                        axios
                            .post(
                                BASE_URL + "lands/store",
                                {
                                    ...landDatas,
                                    documents: landDatas.documents[0],
                                    plans: landDatas.plans[0],
                                    pictures: landDatas.pictures[0],
                                },
                                {
                                    headers: {
                                        Authorization:
                                            "Bearer " +
                                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbmFsZG9AZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY3OTg3MDU5OCwiZXhwIjoxNjgwMDQzMzk4fQ.hmjZVcoFTjq7oXp8Svr4M86Z8EW44fsZt0XCTqX6x7Y",
                                        "Content-Type": "multipart/form-data",
                                    },
                                }
                            )
                            .then(console.log)
                            .catch(console.log);
                    }}>Ok</Button>
                </div>
            </div>
        </>
    );
};

export default AddLand;
