require 'rails_helper'

RSpec.describe "AssetCommodities", type: :request do

  describe "GET /show" do
    it "returns http success" do
      @response = {
        status: 'Success',
        data: []
      }.to_json

      get "/asset_commodities/?cod=PETR4.SA"
      response.should == @response
      expect(eval(response.body)[:data].size) == 30
    end
  end

end
