cat ../log | tee >(grep --line-buffer 'DEBUG_CaService' > ../logs/debug_CaService.log) >(grep --line-buffered 'STATS_CaService' > ../logs/stats_CaService.csv) >(grep --line-buffer 'DEBUG_DenService' > ../logs/debug_DenService.log) >(grep --line-buffered 'STATS_DenService' > ../logs/stats_DenService.csv) >(grep --line-buffer 'DEBUG_Dcc' > ../logs/debug_Dcc.log) >(grep --line-buffered 'STATS_Dcc' > ../logs/stats_Dcc.csv) >(grep --line-buffer 'DEBUG_Ldm' > ../logs/debug_Ldm.log) >(grep --line-buffered 'STATS_Ldm' > ../logs/stats_Ldm.csv)
