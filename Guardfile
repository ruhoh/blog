# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{\.(yml|ru)})
  watch(%r{_root/.+\.(html|md)})
  watch(%r{widgets/.+\.(html|md)})
  watch(%r{posts/.+\.(md|textile|markdown|rst)})  
  watch(%r{plugins/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end



