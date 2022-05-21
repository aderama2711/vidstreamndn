sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.33
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.42
nfdc face create udp://10.0.0.46
nfdc face create udp://10.0.0.50
nfdc face create udp://10.0.0.54
nfdc face create udp://10.0.0.58
nfdc face create udp://10.0.0.62
nfdc face create udp://10.0.0.66
nfdc face create udp://10.0.0.70
nfdc face create udp://10.0.0.74
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R10.conf