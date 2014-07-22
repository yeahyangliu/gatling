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
		total: "60",
		ok: "-",
		ko: "60"
	},
	maxResponseTime : {
		total: "400",
		ok: "-",
		ko: "400"
	},
	meanResponseTime : {
		total: "92",
		ok: "-",
		ko: "92"
	},
	standardDeviation : {
		total: "67",
		ok: "-",
		ko: "67"
	},
	percentiles1 : {
		total: "260",
		ok: "-",
		ko: "260"
	},
	percentiles2 : {
		total: "360",
		ok: "-",
		ko: "360"
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
		total: "10",
		ok: "-",
		ko: "10"
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
		total: "60",
		ok: "-",
		ko: "60"
	},
	maxResponseTime : {
		total: "400",
		ok: "-",
		ko: "400"
	},
	meanResponseTime : {
		total: "92",
		ok: "-",
		ko: "92"
	},
	standardDeviation : {
		total: "67",
		ok: "-",
		ko: "67"
	},
	percentiles1 : {
		total: "260",
		ok: "-",
		ko: "260"
	},
	percentiles2 : {
		total: "360",
		ok: "-",
		ko: "360"
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
		total: "10",
		ok: "-",
		ko: "10"
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
