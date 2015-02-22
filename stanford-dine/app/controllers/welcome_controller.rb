class WelcomeController < ApplicationController
  def index
    @halls = Hall.all
  end

  def vote
    @hall = Article.find(params[:id])
    vote_val = params[:val]; 
  end
end