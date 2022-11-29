class AssetCommoditiesController < ApplicationController
  before_action :load_service, only: [:show]

  def show

    render :json => {
      :status => :success,
      :data => @asset_commodity.get_asset_commodity
    }.to_json
  rescue => e
    puts "#{e.message}"
  end

  private

  def asset_commodity_cod
    params[:cod].strip
  end

  def load_service
    @asset_commodity = AssetCommodityService.new(asset_commodity_cod)
  end

end
