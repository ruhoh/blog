class Ruhoh
	module Templaters
		module BaseHelpers
		
			# Render date in the format given in the date_format variable in config
			def format_date(date)
				newDate = DateTime.parse(date)
				strftimeString=self.context['site']['config']['date_format']
				strftimeString ||="%F"
				newDate.strftime(strftimeString)
			end
		end
	end
end
	