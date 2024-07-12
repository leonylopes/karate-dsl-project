var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "473",
        "ok": "473",
        "ko": "555"
    },
    "maxResponseTime": {
        "total": "774",
        "ok": "774",
        "ko": "555"
    },
    "meanResponseTime": {
        "total": "581",
        "ok": "588",
        "ko": "555"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "120",
        "ko": "0"
    },
    "percentiles1": {
        "total": "555",
        "ok": "553",
        "ko": "555"
    },
    "percentiles2": {
        "total": "611",
        "ok": "652",
        "ko": "555"
    },
    "percentiles3": {
        "total": "741",
        "ok": "750",
        "ko": "555"
    },
    "percentiles4": {
        "total": "767",
        "ok": "769",
        "ko": "555"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.571",
        "ko": "0.143"
    }
},
contents: {
"req_post--api-users-7a661": {
        type: "REQUEST",
        name: "POST /api/users/login",
path: "POST /api/users/login",
pathFormatted: "req_post--api-users-7a661",
stats: {
    "name": "POST /api/users/login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "percentiles2": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "percentiles3": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "percentiles4": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "0.143",
        "ko": "-"
    }
}
    },"req_post--api-artic-043e6": {
        type: "REQUEST",
        name: "POST /api/articles",
path: "POST /api/articles",
pathFormatted: "req_post--api-artic-043e6",
stats: {
    "name": "POST /api/articles",
    "numberOfRequests": {
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "473",
        "ok": "473",
        "ko": "555"
    },
    "maxResponseTime": {
        "total": "611",
        "ok": "611",
        "ko": "555"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "526",
        "ko": "555"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "61",
        "ko": "0"
    },
    "percentiles1": {
        "total": "525",
        "ok": "494",
        "ko": "555"
    },
    "percentiles2": {
        "total": "569",
        "ok": "553",
        "ko": "555"
    },
    "percentiles3": {
        "total": "603",
        "ok": "599",
        "ko": "555"
    },
    "percentiles4": {
        "total": "609",
        "ok": "609",
        "ko": "555"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.571",
        "ok": "0.429",
        "ko": "0.143"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
