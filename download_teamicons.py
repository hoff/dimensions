imgs = ['http://www.dfs-wappen.de/media/verein/ger/bayern/muenchen/dfs_wl_d_muenchen_bayern.gif',
'http://www.dfs-wappen.de/media/verein/ger/westfalen/dortmund/dfs_wl_d_dortmund_borussia.gif',
'http://www.dfs-wappen.de/media/verein/ger/mittelrhein/koeln/dfs_wl_d_leverkusen_bayer.gif',
'http://www.dfs-wappen.de/media/verein/ger/niederrhein/moenchengladbach-viersen/dfs_wl_d_moenchengladbach_borussia.gif',
'http://www.dfs-wappen.de/media/verein/ger/westfalen/gelsenkirchen/dfs_wl_d_gelsenkirchen_schalke_04.gif',
'http://www.dfs-wappen.de/media/verein/ger/suedwest/mainz-bingen/dfs_wl_d_mainz_fsv_05.gif',
'http://www.dfs-wappen.de/media/verein/ger/berlin/charlottenburg-wilmersdorf/dfs_wl_d_berlin_hertha.gif',
'http://www.dfs-wappen.de/media/verein/ger/niedersachsen/wolfsburg/dfs_wl_d_wolfsburg_vfl.gif',
'http://www.dfs-wappen.de/media/verein/ger/mittelrhein/koeln/dfs_wl_d_koeln_1_fc.gif',
'http://www.dfs-wappen.de/media/verein/ger/hamburg/alster/dfs_wl_d_hamburg_hsv.gif',
'http://www.dfs-wappen.de/media/verein/ger/bayern/donau-isar/dfs_wl_d_ingolstadt_fc.gif',
'http://www.dfs-wappen.de/media/verein/ger/bayern/augsburg/dfs_wl_d_augsburg_fc.gif',
'http://www.dfs-wappen.de/media/verein/ger/bremen/bremen-stadt/dfs_wl_d_bremen_werder.gif',
'http://www.dfs-wappen.de/media/verein/ger/hessen/darmstadt/dfs_wl_d_darmstadt_sv.gif',
'http://www.dfs-wappen.de/media/verein/ger/baden/sinsheim/dfs_wl_d_hoffenheim_tsg.gif',
'http://www.dfs-wappen.de/media/verein/ger/hessen/frankfurt/dfs_wl_d_frankfurt_eintracht.gif',
'http://www.dfs-wappen.de/media/verein/ger/suedbaden/freiburg/dfs_wl_d_freiburg_sc.gif',
'http://www.dfs-wappen.de/media/verein/ger/sachsen/leipzig/dfs_wl_d_leipzig_rasenballsport.gif']


for url in imgs:
  filename = url.split('/')[-1]
  response = requests.get(url, stream=True)
  filepath =os.path.join('/Users/martin.micklinghoff/projects/dimensions/src/assets/teams', filename)
  with open(filepath, 'wb') as out_file:
    shutil.copyfileobj(response.raw, out_file)


