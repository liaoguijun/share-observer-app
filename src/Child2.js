import React, { useEffect } from "react";
import libController from "./LibController";

function Child1() {
    function clientUpdate(data) {
        console.log(data);
    }

    function loginOut() {
        console.log("login out");
    }

    useEffect(() => {
        libController.on("clientUpdate", clientUpdate);
        libController.on("loginOut", loginOut);

        return () => {
            libController.off("clientUpdate", clientUpdate);
            libController.off("loginOut", loginOut);
        };
    }, []);
    return (
        <div style={{background: 'pink', marginTop: 20}}>
            child2
        </div>
    );
}

export default Child1;
