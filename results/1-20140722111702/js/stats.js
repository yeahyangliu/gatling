var stats = {
	type: "GROUP",
contents: {
		
				"request-3-d09735bb02d6e5012b92b4f819ff64cc": {
		type: "REQUEST",
		name: "request_3",
path: "request_3",
pathFormatted: "request-3-d09735bb02d6e5012b92b4f819ff64cc",
stats: {
	numberOfRequests : {
		total: "100",
		ok: "0",
		ko: "100"
	},
	minResponseTime : {
		total: "50",
		ok: "-",
		ko: "50"
	},
	maxResponseTime : {
		total: "1200",
		ok: "-",
		ko: "1200"
	},
	meanResponseTime : {
		total: "111",
		ok: "-",
		ko: "111"
	},
	standardDeviation : {
		total: "157",
		ok: "-",
		ko: "157"
	},
	percentiles1 : {
		total: "410",
		ok: "-",
		ko: "410"
	},
	percentiles2 : {
		total: "700",
		ok: "-",
		ko: "700"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 100,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "9",
		ok: "-",
		ko: "9"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "100",
		ok: "0",
		ko: "100"
	},
	minResponseTime : {
		total: "50",
		ok: "-",
		ko: "50"
	},
	maxResponseTime : {
		total: "1200",
		ok: "-",
		ko: "1200"
	},
	meanResponseTime : {
		total: "111",
		ok: "-",
		ko: "111"
	},
	standardDeviation : {
		total: "157",
		ok: "-",
		ko: "157"
	},
	percentiles1 : {
		total: "410",
		ok: "-",
		ko: "410"
	},
	percentiles2 : {
		total: "700",
		ok: "-",
		ko: "700"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 100,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "9",
		ok: "-",
		ko: "9"
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

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
