import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink} from '@fortawesome/free-solid-svg-icons'
import '../utilities/fontawesome'

export default function Project(props) {
  return (
    <div className="card w-96 bg-gray-100 dark:bg-gray-600 rounded-lg">
      <div className="card-body pt-1 pb-5">
        <div className="flex justify-between">
          <img src={props.logo} alt={props.name + ' icon'} className="w-28 object-scale-down" />
          {props.link && <a target="blank" rel="noreferrer noopener" className="no-styling mt-5 mr-2" href={props.link}><span className="badge bg-gray-600 text-white dark:bg-white dark:text-black p-3"><FontAwesomeIcon icon={faLink} size="sm" className="pointer dark:text-gray-100"/></span></a>}
        </div>
        <h2 className="card-title text-xl">
          {props.name}
        </h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}