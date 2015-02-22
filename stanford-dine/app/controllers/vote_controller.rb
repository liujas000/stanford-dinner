class VoteController < ApplicationController
  def index
    hall = Hall.find(params[:hall_id])
    vote_val = params[:vote]
    puts("hall id is " + params[:hall_id] + " and vote val is" +vote_val)
    hall.score += vote_val.to_i;
    hall.save
  end
end
