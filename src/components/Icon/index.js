/*
На 21 строке с помощью модуля prop-types мы добавили проверку пропсов для компонента Icon.

Компонент Icon принимает 3 пропса: 

Размер иконки (необязательный проп)
Имя иконки, которая будет браться с src/icons/index.js (обязательный проп)
Атрибут className (необязательный проп)
На 12 строке с помощью модуля classNames мы добавляем класс элементу svg если он передан.

Вас может насторожить свойство dangerouslySetInnerHTML на 15 строке.
Это свойство используется очень редко, оно предназначено для того чтобы вставить HTML код внутрь React элемента.
Свойство dangerouslySetInnerHTML принимает объект со свойство __html значение которого HTML код:

...
<svg
  dangerouslySetInnerHTML={{ __html: "<div>This is HTML code</div>" }} 
/>
...
...
<svg
  dangerouslySetInnerHTML={{ __html: "<div>This is HTML code</div>" }} 
/>
...
В нашем файле, мы внутрь React элемента svg вставляем иконку как HTML код.
Мы вставляем иконку как HTML код, вместо того чтобы вставить его как React элемент, так как в этом нет необходимости, ведь иконка статична и не будет меняться.
*/

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as icons from "../../icons";
/*
Компонент Icon принимает 3 пропса: 

Размер иконки (необязательный проп)
Имя иконки, которая будет браться с src/icons/index.js (обязательный проп)
Атрибут className (необязательный проп)
*/
const Icon = ({ size = 20, name, className = "" }) => {
  const [width, height] = size instanceof Array ? size : [size, size];
  const [icon, viewBox] = icons[name];

  return (
    <svg
      className={classNames("icon", className)} // с помощью модуля classNames мы добавляем класс элементу svg если он передан.
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: icon }}
      /* Это свойство используется очень редко, оно предназначено для того чтобы вставить HTML код внутрь React элемента.
      Свойство dangerouslySetInnerHTML принимает объект со свойство __html значение которого HTML код:
      внутрь React элемента svg вставляем иконку как HTML код.
      Мы вставляем иконку как HTML код, вместо того чтобы вставить его как React элемент, так как в этом нет необходимости,
      ведь иконка статична и не будет меняться.
      */
      viewBox={viewBox}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;