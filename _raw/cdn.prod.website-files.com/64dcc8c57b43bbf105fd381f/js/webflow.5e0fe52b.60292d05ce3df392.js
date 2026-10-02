(() => {
    var t, e, i, r, a = {
            1863(t, e, i) {
                i(6442), i(6990), i(3366), i(7587), i(8548), i(9984), i(2391), i(5843), i(7160), i(7346)
            },
            7346() {
                function t() {
                    let t = Webflow.require("ix3");
                    t.ready().then(() => {
                        let e = t.getInstance();
                        e && (e.register([{
                            id: "i-b02533db",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top top",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "reverse"
                                        }
                                    },
                                    ["wf:attribute", "[data-nav-black]", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-6f48c306"],
                            deleted: !1
                        }, {
                            id: "i-6a900d26",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:click", {
                                        control: "togglePlayReverse",
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["nav_menu-2"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-7cff1fed"],
                            conditionalPlayback: [{
                                type: "breakpoint",
                                behavior: "dont-animate",
                                breakpoints: ["main", "medium"]
                            }],
                            deleted: !1
                        }, {
                            id: "i-1cbb0dec",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "pause",
                                            enterBack: "play",
                                            leaveBack: "pause"
                                        }
                                    },
                                    ["wf:class", ["feature_horizontal-layout.cc-teal"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-d59d05fa"],
                            conditionalPlayback: [{
                                type: "prefers-reduced-motion",
                                behavior: "dont-animate",
                                breakpoints: []
                            }],
                            deleted: !1
                        }, {
                            id: "i-6e965906",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "pause",
                                            enterBack: "play",
                                            leaveBack: "pause"
                                        }
                                    },
                                    ["wf:class", ["marquee.cc-accolades"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-196b8680"],
                            conditionalPlayback: [{
                                type: "prefers-reduced-motion",
                                behavior: "dont-animate",
                                breakpoints: []
                            }],
                            deleted: !1
                        }, {
                            id: "i-d1ec6f42",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "pause",
                                            enterBack: "play",
                                            leaveBack: "pause"
                                        }
                                    },
                                    ["wf:class", ["works-with_marquee"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-aee34d88"],
                            conditionalPlayback: [{
                                type: "prefers-reduced-motion",
                                behavior: "dont-animate",
                                breakpoints: []
                            }, {
                                type: "breakpoint",
                                behavior: "dont-animate",
                                breakpoints: ["medium", "main"]
                            }],
                            deleted: !1
                        }, {
                            id: "i-36c1d515",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: .8,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["intelligence_card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-6800ca18"],
                            deleted: !1
                        }, {
                            id: "i-8d66712f",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "pause",
                                            enterBack: "play",
                                            leaveBack: "pause"
                                        }
                                    },
                                    ["wf:class", ["avatar-wrapper"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-298e12d2"],
                            deleted: !1
                        }, {
                            id: "i-bf1eae33",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:load", {
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-e151898f"],
                            deleted: !1
                        }, {
                            id: "i-46a957d5",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["hero_section"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-c71684aa"],
                            conditionalPlayback: [{
                                type: "breakpoint",
                                behavior: "dont-animate",
                                breakpoints: ["tiny", "small"]
                            }],
                            deleted: !1
                        }, {
                            id: "i-7a517d25",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "pause",
                                            enterBack: "play",
                                            leaveBack: "pause"
                                        }
                                    },
                                    ["wf:class", ["marquee.cc-cards"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-94313515"],
                            conditionalPlayback: [{
                                type: "prefers-reduced-motion",
                                behavior: "dont-animate",
                                breakpoints: []
                            }],
                            deleted: !1
                        }, {
                            id: "i-7865e328",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: .8,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["records_animation"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-3a710d45"],
                            conditionalPlayback: [{
                                type: "breakpoint",
                                behavior: "dont-animate",
                                breakpoints: ["small", "tiny"]
                            }],
                            deleted: !1
                        }, {
                            id: "i-838a2a4d",
                            scope: {
                                type: "pages",
                                value: ["69ebf570150d80d05554c624"]
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: .8,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["qr_fixed"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-c26325bc"],
                            conditionalPlayback: [{
                                type: "breakpoint",
                                behavior: "dont-animate",
                                breakpoints: ["tiny"]
                            }],
                            deleted: !1
                        }], [{
                            id: "t-6f48c306",
                            deleted: !1,
                            actions: [{
                                id: "ta-61cb17b3",
                                targets: [
                                    ["wf:class", ["nav_layout"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .1,
                                    position: 0
                                },
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: [null, "hsla(224.99999999999997, 5.56%, 14.12%, 1.00)"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-7cff1fed",
                            deleted: !1,
                            actions: [{
                                id: "ta-7d91085e",
                                targets: [
                                    ["wf:class", ["nav_main-wrapper"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .64,
                                    position: 0,
                                    ease: 11
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        height: ["0px", "auto"]
                                    }
                                }
                            }, {
                                id: "ta-7a7c0d06",
                                targets: [
                                    ["wf:selector", ".nav_main-inner a, .nav_main .btn", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .54,
                                    position: 0,
                                    stagger: {
                                        each: .05
                                    },
                                    ease: 11
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        autoAlpha: ["0%", null]
                                    }
                                }
                            }, {
                                id: "ta-0101e687",
                                targets: [
                                    ["wf:class", ["nav_menu-line"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        width: [null, "1.5rem"]
                                    }
                                }
                            }, {
                                id: "ta-3236b825",
                                targets: [
                                    ["wf:class", ["nav_menu-line"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .44,
                                    position: .11,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        y: [null, "0rem"]
                                    }
                                }
                            }, {
                                id: "ta-d1315f6f",
                                targets: [
                                    ["wf:class", ["nav_menu-line.cc-middle"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 0,
                                    position: .24
                                },
                                tt: 3,
                                properties: {
                                    "wf:class": {},
                                    "wf:transform": {
                                        display: [null, "none"]
                                    }
                                }
                            }, {
                                id: "ta-9049e3f4",
                                targets: [
                                    ["wf:class", ["nav_menu-line.cc-top"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .35,
                                    position: .29,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        rotation: [null, "45deg"]
                                    }
                                }
                            }, {
                                id: "ta-9a0a9152",
                                targets: [
                                    ["wf:class", ["nav_menu-line.cc-bottom"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .35,
                                    position: .29,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        rotation: [null, "-45deg"]
                                    }
                                }
                            }, {
                                id: "ta-970b3459",
                                targets: [
                                    ["wf:class", ["nav_layout-2"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .64,
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        backgroundColor: ["hsla(0, 0.00%, 100.00%, 0.60)", "hsla(0, 0.00%, 100.00%, 0.80)"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-d59d05fa",
                            deleted: !1,
                            actions: [{
                                id: "ta-0f6739a6",
                                targets: [
                                    ["wf:class", ["records_circle-inner"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["records_circle.cc-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 120,
                                    repeat: -1,
                                    yoyo: !1,
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        rotation: [null, "360deg"]
                                    }
                                }
                            }, {
                                id: "ta-65898e1a",
                                targets: [
                                    ["wf:class", ["records_circle-inner"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["records_circle.cc-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 120,
                                    repeat: -1,
                                    yoyo: !1,
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        rotation: [null, "-360deg"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-196b8680",
                            deleted: !1,
                            actions: [{
                                id: "ta-c495faab",
                                targets: [
                                    ["wf:class", ["marquee_row.cc-accolades"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 60,
                                    repeat: -1,
                                    yoyo: !1,
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-aee34d88",
                            deleted: !1,
                            actions: [{
                                id: "ta-4c9715e3",
                                targets: [
                                    ["wf:class", ["works-with_marquee-row"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 30,
                                    repeat: -1,
                                    yoyo: !1,
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-6800ca18",
                            deleted: !1,
                            actions: [{
                                id: "ta-85d8b17e",
                                targets: [
                                    ["wf:class", ["intelligence_floating"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        yPercent: ["7.5%", "-7.5%"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-298e12d2",
                            deleted: !1,
                            actions: [{
                                id: "ta-18caab18",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .3,
                                    position: 2.7,
                                    ease: {
                                        type: "steps",
                                        stepCount: 4
                                    }
                                },
                                properties: {
                                    "wf:transform": {
                                        x: [null, "-12.5rem"]
                                    }
                                }
                            }, {
                                id: "ta-0aec459c",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .3,
                                    position: 5.7,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        x: [null, "-25rem"]
                                    }
                                }
                            }, {
                                id: "ta-1f1e03ba",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .3,
                                    position: 8.7,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        x: [null, "-37.5rem"]
                                    }
                                }
                            }, {
                                id: "ta-354beac6",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .3,
                                    position: 11.7,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        x: [null, "-50rem"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-e151898f",
                            deleted: !1,
                            actions: [{
                                id: "ta-02fbf5d3",
                                targets: [
                                    ["wf:class", ["hero_phone"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }],
                                    ["wf:class", ["hero_watch"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .4,
                                    stagger: {
                                        each: .1
                                    },
                                    ease: 5
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        autoAlpha: ["0%", null],
                                        yPercent: ["10%", null]
                                    }
                                }
                            }]
                        }, {
                            id: "t-c71684aa",
                            deleted: !1,
                            actions: [{
                                id: "ta-d032b4dc",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-1"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 0,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["-35%", "0%"],
                                        rotation: ["12deg", "2deg"]
                                    }
                                }
                            }, {
                                id: "ta-123dd096",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-2"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: .65,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["38%", "0%"],
                                        rotation: ["-21deg", "-2deg"]
                                    }
                                }
                            }, {
                                id: "ta-fb61ee4a",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-1"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: .81,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "-30%"],
                                        rotation: ["-13deg", "0deg"]
                                    }
                                }
                            }, {
                                id: "ta-b0589e49",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-3"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 1.32,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1.2, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["12%", "0%"],
                                        rotation: ["-3deg", "-1deg"]
                                    }
                                }
                            }, {
                                id: "ta-0fd763c7",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-2"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 1.34,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "38%"],
                                        rotation: ["2deg", "12deg"]
                                    }
                                }
                            }, {
                                id: "ta-b82b2fbe",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-3"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 2,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "7%"],
                                        rotation: ["0deg", "6deg"]
                                    }
                                }
                            }, {
                                id: "ta-5bdfe2a9",
                                targets: [
                                    ["wf:class", ["hero_phone-video.cc-2"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }],
                                    ["wf:class", ["hero_watch-video.cc-2"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 0,
                                    position: 5.59
                                },
                                tt: 3,
                                properties: {
                                    "wf:class": {},
                                    "wf:transform": {
                                        display: [null, "block"]
                                    }
                                }
                            }, {
                                id: "ta-1e6b08a8",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-4"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 5.45,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["-35%", "0%"],
                                        rotation: ["12deg", "2deg"]
                                    }
                                }
                            }, {
                                id: "ta-fd78f54a",
                                targets: [
                                    ["wf:class", ["hero_phone-video"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.23,
                                    position: 5.65,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-100%"]
                                    }
                                }
                            }, {
                                id: "ta-53706d1e",
                                targets: [
                                    ["wf:class", ["hero_watch-video"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.11,
                                    position: 5.77,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-100%"]
                                    }
                                }
                            }, {
                                id: "ta-04b1e2ea",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-5"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 6.1,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["38%", "0%"],
                                        rotation: ["-12deg", "-2deg"]
                                    }
                                }
                            }, {
                                id: "ta-79b80db1",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-6"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 6.26,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, .8],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "-20%"],
                                        rotation: ["-10deg", "2deg"]
                                    }
                                }
                            }, {
                                id: "ta-4d177380",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-4"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 6.77,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["12%", "0%"],
                                        rotation: ["-3deg", "0deg"]
                                    }
                                }
                            }, {
                                id: "ta-018c53cd",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-5"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 6.79,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "38%"],
                                        rotation: ["2deg", "12deg"]
                                    }
                                }
                            }, {
                                id: "ta-19446572",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-6"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 7.44,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1.2],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "-20%"],
                                        rotation: ["-13deg", "-9deg"]
                                    }
                                }
                            }, {
                                id: "ta-7143121b",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-7"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 11.56,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["-35%", "0%"],
                                        rotation: ["12deg", "2deg"]
                                    }
                                }
                            }, {
                                id: "ta-06d803be",
                                targets: [
                                    ["wf:class", ["hero_phone-video.cc-3"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }],
                                    ["wf:class", ["hero_watch-video.cc-3"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 0,
                                    position: 11.79
                                },
                                tt: 3,
                                properties: {
                                    "wf:class": {},
                                    "wf:transform": {
                                        display: [null, "block"]
                                    }
                                }
                            }, {
                                id: "ta-280c8fce",
                                targets: [
                                    ["wf:class", ["hero_phone-video"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.33,
                                    position: 11.83,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-200%"]
                                    }
                                }
                            }, {
                                id: "ta-a785684b",
                                targets: [
                                    ["wf:class", ["hero_watch-video"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.21,
                                    position: 11.97,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-200%"]
                                    }
                                }
                            }, {
                                id: "ta-0e6cdae4",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-8"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 12.21,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["38%", "0%"],
                                        rotation: ["-12deg", "-2deg"]
                                    }
                                }
                            }, {
                                id: "ta-a2238907",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-9"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-1"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 12.37,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1.2],
                                        xPercent: ["-75%", "75%"]
                                    }
                                }
                            }, {
                                id: "ta-f2484759",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-8"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 13.71,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "30%"],
                                        rotation: ["2deg", "11deg"]
                                    }
                                }
                            }, {
                                id: "ta-3bdd1582",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-7"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 13.83,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "-24%"],
                                        rotation: ["-3deg", "-11deg"]
                                    }
                                }
                            }, {
                                id: "ta-c1fb2293",
                                targets: [
                                    ["wf:class", ["hero_card-container.cc-9"], {
                                        relationship: "within",
                                        filterBy: ["wf:class", ["hero_bottom-clip.cc-1-2"]],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 3.13,
                                    position: 14.37,
                                    ease: 1
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [.8, 1],
                                        xPercent: ["-75%", "75%"],
                                        yPercent: ["0%", "0%"],
                                        rotation: ["0deg", "1deg"]
                                    }
                                }
                            }, {
                                id: "ta-531779a9",
                                targets: [
                                    ["wf:class", ["hero_phone-video.cc-1"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }],
                                    ["wf:class", ["hero_watch-video.cc-1"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .09,
                                    position: 17.29
                                },
                                tt: 3,
                                properties: {
                                    "wf:class": {},
                                    "wf:transform": {
                                        xPercent: [null, "100%"]
                                    }
                                }
                            }, {
                                id: "ta-fac3ea2c",
                                targets: [
                                    ["wf:class", ["hero_phone-video.cc-1"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.09,
                                    position: 17.38,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "0%"]
                                    }
                                }
                            }, {
                                id: "ta-7a63063d",
                                targets: [
                                    ["wf:class", ["hero_phone-video.cc-3"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.09,
                                    position: 17.38,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-300%"]
                                    }
                                }
                            }, {
                                id: "ta-165ba7cb",
                                targets: [
                                    ["wf:class", ["hero_watch-video.cc-1"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.09,
                                    position: 17.38,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "0%"]
                                    }
                                }
                            }, {
                                id: "ta-31d26d03",
                                targets: [
                                    ["wf:class", ["hero_watch-video.cc-3"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 1.09,
                                    position: 17.38,
                                    ease: 11
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-300%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-94313515",
                            deleted: !1,
                            actions: [{
                                id: "ta-21b0fe7b",
                                targets: [
                                    ["wf:class", ["marquee_card-row"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 60,
                                    repeat: -1,
                                    yoyo: !1,
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        xPercent: [null, "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-3a710d45",
                            deleted: !1,
                            actions: [{
                                id: "ta-82adf2ae",
                                targets: [
                                    ["wf:class", ["records_phone-ui"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        yPercent: ["10%", "-10%"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-c26325bc",
                            deleted: !1,
                            actions: [{
                                id: "ta-62b77954",
                                targets: [
                                    ["wf:class", ["qr_container"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        autoAlpha: ["100%", "0%"]
                                    }
                                }
                            }]
                        }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                    })
                }
                "complete" === document.readyState ? t() : document.addEventListener("readystatechange", () => {
                    "complete" === document.readyState && t()
                })
            }
        },
        n = {};

    function o(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var i = n[t] = {
            exports: {}
        };
        return a[t](i, i.exports, o), i.exports
    }
    o.m = a, o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), t = [], o.O = (e, i, r, a) => {
        if (i) {
            a = a || 0;
            for (var n = t.length; n > 0 && t[n - 1][2] > a; n--) t[n] = t[n - 1];
            t[n] = [i, r, a];
            return
        }
        for (var s = 1 / 0, n = 0; n < t.length; n++) {
            for (var [i, r, a] = t[n], c = !0, l = 0; l < i.length; l++)(!1 & a || s >= a) && Object.keys(o.O).every(t => o.O[t](i[l])) ? i.splice(l--, 1) : (c = !1, a < s && (s = a));
            if (c) {
                t.splice(n--, 1);
                var p = r();
                void 0 !== p && (e = p)
            }
        }
        return e
    }, e = {
        690: 0
    }, o.O.j = t => 0 === e[t], i = (t, i) => {
        var r, a, [n, s, c] = i,
            l = 0;
        if (n.some(t => 0 !== e[t])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (c) var p = c(o)
        }
        for (t && t(i); l < n.length; l++) a = n[l], o.o(e, a) && e[a] && e[a][0](), e[a] = 0;
        return o.O(p)
    }, (r = self.rspackChunk = self.rspackChunk || []).forEach(i.bind(null, 0)), r.push = i.bind(null, r.push.bind(r));
    var s = o.O(void 0, ["270"], () => o(1863));
    s = o.O(s)
})();