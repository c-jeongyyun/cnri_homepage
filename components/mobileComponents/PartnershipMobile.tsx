import { WorkAndPartnershipContent } from "../../functions/WorkAndResponsibilitiesPartnership";
import { useState, useRef } from "react";
import Icon from "../RAndDCompoenents/Icon";
import Carousel from "../Carousel";

const PartnershipMobile = () => {
  const [currentObj, setCurrentObj] = useState(
    WorkAndPartnershipContent.totalBusiness
  );
  const picRef = useRef<null | HTMLVideoElement>(null);

  const userClick = (e: any) => {
    const val = e.target.id;
    if (WorkAndPartnershipContent[val] != undefined) {
      setCurrentObj(WorkAndPartnershipContent[val]);
    }
    if (picRef && picRef.current) {
      console.log(picRef);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3">
        <div id="ts" className="border-2 flex justify-center" onClick={userClick}>
          <div id="ts" className="w-[80%] ">
            <Icon
              defaultIcon={WorkAndPartnershipContent.ts.default}
              coloredIcon={WorkAndPartnershipContent.ts.colored}
              isCurrent={currentObj.title == "ts" ? true : false}
              hasMultiple={false}
            />
          </div>
        </div>
        <div id="posco" className="border-2 flex justify-center" onClick={userClick}>
        <div id="posco" className="w-[80%] ">
            <Icon
              defaultIcon={WorkAndPartnershipContent.posco.default}
              coloredIcon={WorkAndPartnershipContent.posco.colored}
              isCurrent={currentObj.title == "posco" ? true : false}
              hasMultiple={true}

            />
          </div>
        </div>
        <div className="border-2 flex justify-center">
            <div id="h2" className="w-[80%] " onClick={userClick}> 
            <Icon
              defaultIcon={WorkAndPartnershipContent.h2.default}
              coloredIcon={WorkAndPartnershipContent.h2.colored}
              isCurrent={currentObj.title == "h2" ? true : false}
              hasMultiple={false}
            />
          </div>
          </div>
      </div>
      <div className="grid grid-cols-2">
        <div id = "totalBusiness" className="border-2 flex justify-center"><div id="ts" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
              coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title == "totalBusiness" ? true : false}
              hasMultiple={false}
            />
          </div></div>
        <div id = "snu" className="border-2 flex justify-center"><div id="ts" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.snu.default}
              coloredIcon={WorkAndPartnershipContent.snu.colored}
              isCurrent={currentObj.title == "snu" ? true : false}
              hasMultiple={false}

            />
          </div></div>
      </div>

      <div className="mt-[2vh] border-4 p-[3vw] mb-[3vh]">
        <div className="text-[4.55vw]">
        {currentObj.hasMultiple ? (
            <Carousel currentObj={currentObj}></Carousel>
          ) : (
            <>
             
              <div className=" flex justify-center self-center  ">{currentObj.img}</div>
              <div className="text-[5.5vw]  font-semibold flex justify-start pb-[1vh] pt-[2vh]">{currentObj.kTitle}</div>
              <div className="text-[3vw]   ">
                <ul>
                  {currentObj.content.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnershipMobile;
