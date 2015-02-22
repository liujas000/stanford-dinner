class WelcomeController < ApplicationController
  def index
    @halls = Hall.all
    @weekday = Time.now.strftime('%A')
    hour = Time.now.strftime("%K").to_i
    if(@weekday == "Saturday" || @weekday == "Sunday")
      if(hour > 7 && hour < 16) 
        @meal = "Brunch"
      else
        @meal = "Dinner"
      end
    else
      if(hour > 7 && hour < 11)
        @meal = "Breakfast"
      elsif(hour < 16)
        @meal = "Lunch"
      else
        @meal = "Dinner"
      end
    end
  end
end

