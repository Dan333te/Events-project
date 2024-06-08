import React from "react";
import Button from "@/Ui/Button";
import {
  GetAllEvenets,
  getFeatured,
  getFilteredDate,
  GetEventId,
} from "@/Dummy";
const EventsPage = () => {
  const events=GetAllEvenets()
  return (
    <>
   
      <div className="cardContainer">
        {events.map((event) => {
          return (
            <div className="Card" key={event.id}>
              <img height="100px" src={event.imageUrl} />
              <div className="cardContent">
                <div className="EventNameAndLocation">
                  <h3>{event.name}</h3>
                  <div className="locationContainer">
                    <svg
                      version="1.0"
                      id="Layer_1"
                      width="24px"
                      height="24px"
                      viewBox="0 0 64 64"
                      enable-background="new 0 0 64 64"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#d10034"
                          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h6 style={{ fontSize: "14px" }}>{event.address}</h6>
                  </div>
                </div>
                <p style={{ marginTop: "12px" }}>{event.description}</p>
                <div className="ButtonAndDate">
                  <Button link={event.id}>Book for event</Button>

                  <div className="Date">
                    <svg
                      version="1.0"
                      id="Layer_1"
                      width="24px"
                      height="24px"
                      viewBox="0 0 64 64"
                      enable-background="new 0 0 64 64"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            fill="#394240"
                            d="M60,4H48c0-2.211-1.789-4-4-4s-4,1.789-4,4H24c0-2.211-1.789-4-4-4s-4,1.789-4,4H4C1.789,4,0,5.789,0,8v52 c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M56,56H8V28h48V56z M56,20H8v-8h8c0,2.211,1.789,4,4,4 s4-1.789,4-4h16c0,2.211,1.789,4,4,4s4-1.789,4-4h8V20z"
                          ></path>{" "}
                          <rect
                            x="8"
                            y="28"
                            fill="#F9EBB2"
                            width="48"
                            height="28"
                          ></rect>{" "}
                          <path
                            fill="#F76D57"
                            d="M56,20H8v-8h8c0,2.211,1.789,4,4,4s4-1.789,4-4h16c0,2.211,1.789,4,4,4s4-1.789,4-4h8V20z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default EventsPage