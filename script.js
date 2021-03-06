"use strict";
var window_exist = "window_exist";

function check_this(a) {
    if (a?.window_exist === window_exist) return "Window_Globe";
    if (a?.lvl__1_obj === "test_obj") return "TEST OBJ";
    return a;
}

let test_obj = {
    lvl__1_obj: "test_obj",
    lvl__1_obj_this: check_this(this), //window

    lvl__1_obj__2_func: function () {
        console.log("3_1__. lvl__1_obj__2_func: ", check_this(this)); // test_obj

        let lvl__1_obj__2_func__3_func = function () {
            console.log("3_1_1. lvl__1_obj__2_func__3_func: ", check_this(this)); // window, undefined

            let lvl__1_obj__2_func__3_func__4_func = function () {
                console.log("3_1_1_1. lvl__1_obj__2_func__3_func__4_func: ", check_this(this)); // window, undefined
            };

            let lvl__1_obj__2_func__3_func__4_arr = () => {
                console.log("3_1_1_2. lvl__1_obj__2_func__3_func__4_arr: ", check_this(this)); // window, undefined
            };

            lvl__1_obj__2_func__3_func__4_func();
            lvl__1_obj__2_func__3_func__4_arr();

        };

        let lvl__1_obj__2_func__3_arr = () => {
            console.log("3_1_2. lvl__1_obj__2_func__3_arr: ", check_this(this)); // test_obj, test_obj

            let lvl__1_obj__2_func__3_arr__4_func = function () {
                console.log("3_1_2_1. lvl__1_obj__2_func__3_arr__4_func: ", check_this(this)); // window, undefined
            };

            let lvl__1_obj__2_func__3_arr__4_arr = () => {
                console.log("3_1_2_2. lvl__1_obj__2_func__3_arr__4_arr: ", check_this(this)); // test_obj, test_obj
            };

            lvl__1_obj__2_func__3_arr__4_func();
            lvl__1_obj__2_func__3_arr__4_arr();
        };

        lvl__1_obj__2_func__3_func();
        lvl__1_obj__2_func__3_arr();

        return check_this(this);
    },

    lvl__1_obj__2_arr: () => {
        console.log("4_1__. lvl__1_obj__2_arr: ", check_this(this)); // window, window

        let lvl__1_obj__2_arr__3_func = function () {
            console.log("4_1_1. lvl__1_obj__2_arr__3_func: ", check_this(this)); // window, undefined

            let lvl__1_obj__2_arr__3_func__4_func = function () {
                console.log("4_1_1_1. lvl__1_obj__2_arr__3_func__4_func: ", check_this(this)); // window, undefined
            };

            let lvl__1_obj__2_arr__3_func__4_arr = () => {
                console.log("4_1_1_2. lvl__1_obj__2_arr__3_func__4_arr: ", check_this(this)); // window, undefined
            };

            lvl__1_obj__2_arr__3_func__4_func();
            lvl__1_obj__2_arr__3_func__4_arr();

        };

        let lvl__1_obj__2_arr__3_arr = () => {
            console.log("4_1_2. lvl__1_obj__2_arr__3_arr: ", check_this(this)); // window, window

            let lvl__1_obj__2_arr__3_arr__4_func = function () {
                console.log("4_1_2_1. lvl__1_obj__2_arr__3_arr__4_func: ", check_this(this)); // window, undefined
            };

            let lvl__1_obj__2_arr__3_arr__4_arr = () => {
                console.log("4_1_2_2. lvl__1_obj__2_arr__3_arr__4_arr: ", check_this(this)); // window, window
            };

            lvl__1_obj__2_arr__3_arr__4_func();
            lvl__1_obj__2_arr__3_arr__4_arr();
        };

        lvl__1_obj__2_arr__3_func();
        lvl__1_obj__2_arr__3_arr();

        return check_this(this);
    }
}


console.log("1. Global: ", check_this(this)); // window

console.log("2. lvl__1_obj_this: ", test_obj.lvl__1_obj_this); // window

console.log("3_1__. lvl__1_obj__2_func(): ", test_obj.lvl__1_obj__2_func()); // test_obj

console.log("4_1__. lvl__1_obj__2_arr(): ", test_obj.lvl__1_obj__2_arr()); // test_obj
