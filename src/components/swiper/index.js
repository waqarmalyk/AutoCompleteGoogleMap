import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import Card from "./Card";
import NumberForm from "./NumberForm";
import "./Swiper.css";
import "swiper/css";

const DEFAULT_LIST = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];

const renderSwiperBody = (number, isActive) =>
  isActive ? (
    <div className="active-container">
      <div className="selected-number">{number}</div>
    </div>
  ) : (
    <div className="non-active">{number}</div>
  );

const SwiperField = ({ list = DEFAULT_LIST }) => {
  const [listToDisplay, setListToDisplay] = useState([]);
  const [displaySwiper, setDisplaySwiper] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayAddFrom, setDisplayAddForm] = useState(false);

  const handleSaveClick = () => {
    if (activeIndex !== listToDisplay.length) setDisplaySwiper((prev) => !prev);
  };
  const handleAddClick = () => {
    setDisplayAddForm((prev) => !prev);
  };

  useEffect(() => {
    setListToDisplay(list);
  }, [list]);

  const updateTheList = (newValue) => {
    if (listToDisplay.indexOf(newValue !== -1)) {
      alert("Value already exists");
      return;
    }
    const newList = [...listToDisplay, newValue];
    setListToDisplay(newList);
    setDisplayAddForm((prev) => !prev);
  };

  return (
    <div className="sub-container">
      {displaySwiper ? (
        <>
          {selectedIndex === activeIndex && (
            <div className="current-choice"> Current choice</div>
          )}
          <Swiper
            modules={[Keyboard]}
            slidesPerView={7}
            spaceBetween={2}
            centeredSlides={true}
            slideToClickedSlide={true}
            onSwiper={(swiper) => {
              swiper.keyboard.enable();
            }}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
            initialSlide={selectedIndex}
          >
            {listToDisplay.map((number) => (
              <SwiperSlide>
                {({ isActive }) => renderSwiperBody(number, isActive)}
              </SwiperSlide>
            ))}
            <SwiperSlide onClick={(e) => e}>
              {displayAddFrom ? (
                <NumberForm updateTheList={updateTheList} />
              ) : (
                <div onClick={handleAddClick} className="add">
                  Add
                </div>
              )}
            </SwiperSlide>
          </Swiper>
          <div className="per-month">€/Month</div>
          <div onClick={handleSaveClick} className="save-button">
            Save
          </div>
        </>
      ) : (
        <Card
          setDisplaySwiper={setDisplaySwiper}
          setSelectedIndex={setSelectedIndex}
          activeIndex={activeIndex}
          number={listToDisplay[activeIndex]}
        />
      )}
    </div>
  );
};

export default SwiperField;
