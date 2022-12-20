import React, { useEffect } from "react";
import libController from "./LibController";

function Child1() {
    function handle1() {
        libController.clientUpdate({a:1, b:2, c:3, d:4})
    }
    function handle2() {
        libController.logOut('login out')
    }
    return (
        <div style={{background: 'yellow'}}>
            <button onClick={handle1}>clientUpdate</button>
            <button onClick={handle2}>loginOut</button>
        </div>
    );
}

export default Child1;
