import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import "./styles.css";

dayjs.extend(Calendar);

const Title = ({ date }) => (
    <div className="title">
        {/* с помощью модуля dayjs конвертируем дату в нормальный вид  */}

        {dayjs(date).calendar(null, {
            someDay: "[Сегодня]",
            lastWeek: "DD MMMM",
            someElse: "DD MMMM YYYY",
        })}


    </div>
);

Title.PropTypes = {
    date: PropTypes.string.isRequired,
};


export default Title;