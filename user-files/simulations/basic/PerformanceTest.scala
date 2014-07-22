package basic

import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import com.excilys.ebi.gatling.jdbc.Predef._
import com.excilys.ebi.gatling.http.Headers.Names._
import akka.util.duration._
import bootstrap._

class PerformanceTest extends Simulation {


  val httpConf = httpConfig.baseURL("http://10.18.13.13:8080").disableFollowRedirect

	setUp(SearchScenario.scn.users(100).ramp(10).protocolConfig(httpConf))
}
