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
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "230",
		ok: "230",
		ko: "-"
	},
	maxResponseTime : {
		total: "910",
		ok: "910",
		ko: "-"
	},
	meanResponseTime : {
		total: "339",
		ok: "339",
		ko: "-"
	},
	standardDeviation : {
		total: "155",
		ok: "155",
		ko: "-"
	},
	percentiles1 : {
		total: "750",
		ok: "750",
		ko: "-"
	},
	percentiles2 : {
		total: "900",
		ok: "900",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 96,
		percentage: 96
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 4,
		percentage: 4
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "10",
		ok: "10",
		ko: "-"
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
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "230",
		ok: "230",
		ko: "-"
	},
	maxResponseTime : {
		total: "910",
		ok: "910",
		ko: "-"
	},
	meanResponseTime : {
		total: "339",
		ok: "339",
		ko: "-"
	},
	standardDeviation : {
		total: "155",
		ok: "155",
		ko: "-"
	},
	percentiles1 : {
		total: "750",
		ok: "750",
		ko: "-"
	},
	percentiles2 : {
		total: "900",
		ok: "900",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 96,
		percentage: 96
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 4,
		percentage: 4
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "10",
		ok: "10",
		ko: "-"
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
