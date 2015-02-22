class WelcomeController < ApplicationController
  def index
    @halls = Hall.all
  end
end

