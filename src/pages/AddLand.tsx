import Divider from "../components/Divider";
import { AiOutlineFile } from "react-icons/ai";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";

type Props = {};

const AddLand = (props: Props) => {
  return (
    <section>
      <div id="file-submit-wrapper">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Cover photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-sequelLight text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
              >
                <span>+ Add a picture</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

      <section id="land-info" className="mt-4">
        <input
          type="text"
          name="landTitle"
          placeholder="Titre foncier"
          className="border-none font-sequelBold text-4xl font-bold outline-none ml-6 leading-[3rem]"
        />
        <div id="land-info-details" className="mt-4 ml-6 space-y-4">
          <div className="flex flex-row items-center">
            <SlSizeFullscreen className="text-2xl text-neutral-400" />
            <input
              type="text"
              placeholder="Entrer la superficie en m²"
              className="border-none outline-none ml-4"
            />
          </div>
          <div className="flex flex-row items-center">
            <IoPersonOutline className="text-2xl text-neutral-400" />
            <input
              type="text"
              placeholder="Nom du proprietaire tel que sur le titre foncier"
              className="border-none outline-none ml-4"
            />
          </div>
          <div className="flex flex-row items-center">
            <MdOutlinePlace className="text-2xl text-neutral-400" />
            <input
              type="text"
              placeholder="Localisation"
              className="border-none outline-none ml-4"
            />
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
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span>
                    <input
                      id="plan-upload"
                      name="plan-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
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
            </div>
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
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-sequelLight bg-white text-neutral-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-600 focus-within:ring-offset-2 hover:text-neutral-500"
                  >
                    <span>+ Add a picture</span>
                    <input
                      id="photos-upload"
                      name="photos-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-24">
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
            </div>
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
        <Divider />
        <div className="flex flex-row items-center">
          <AiOutlineFile className="text-2xl text-neutral-400" />
          <input
            type="file"
            name="doc-upload"
            id="doc-upload"
            placeholder="+ Add a file"
            className="sr-only"
          />
          <label
            htmlFor="doc-upload"
            className="relative cursor-pointer rounded-md
            bg-white text-neutral-600 focus-within:outline-none
            focus-within:ring-2 focus-within:ring-neutral-600
            focus-within:ring-offset-2 hover:text-neutral-500 ml-3 font-sequelLight"
          >
            + Add a file
          </label>
        </div>
        <Divider />
      </section>
    </section>
  );
};

export default AddLand;
