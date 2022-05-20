sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.33
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
nfdc face create udp://10.0.0.38
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R10.conf