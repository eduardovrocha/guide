Rails.application.routes.draw do
  get  "/asset_commodities"                    => "asset_commodities#show", as: :asset_commodity
end
