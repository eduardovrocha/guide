require "open-uri"

class AssetCommodityService

  def initialize(asset_commodity)
    @asset_commodity = asset_commodity
  end

  def get_asset_commodity
    url = URI.parse("https://query2.finance.yahoo.com/v8/finance/chart/#{@asset_commodity}")
    uri = URI.open(url, "User-Agent" => "BYF/1")
    response = JSON.parse(uri.read)

    calculate_valuation = -> (res) {
      res['chart']['result'][0]['indicators']['quote'][0]['open'][0...30]
    }

    calculate_valuation.call(response)
  end

  def set_historic

  end

end